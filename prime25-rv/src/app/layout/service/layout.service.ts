import { isPlatformBrowser } from '@angular/common';
import { Injectable, effect, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';

export type ColorScheme = 'light' | 'dark' | 'dim';

export interface layoutConfig {
    colorScheme?: ColorScheme;
    darkTheme?: boolean;
    inputStyle: string;
    language: string;
    menuMode?: string;
    menuTheme?: string;
    preset?: string;
    primary?: string;
    ripple: boolean;
    showVsoftFun: boolean;
    surface?: string | undefined | null;
}

interface LayoutState {
    staticMenuDesktopInactive?: boolean;
    overlayMenuActive?: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive?: boolean;
    menuHoverActive?: boolean;
    profileSidebarVisible: boolean;
    sidebarActive: boolean;
    anchored: boolean;
    overlaySubmenuActive: boolean;
    activeMenuItem: any;
}

interface MenuChangeEvent {
    key: string;
    routeEvent?: boolean;
}

interface StoredLayoutConfigEnvelope {
    version: number;
    config: Partial<layoutConfig>;
}

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    private readonly storageKey = 'layoutConfig25';

    private readonly storageVersion = 1;

    private readonly legacyStorageKeys = ['layoutConfig'];

    private readonly platformId = inject(PLATFORM_ID);

    private readonly isBrowser = isPlatformBrowser(this.platformId);

    _config: layoutConfig = {
        colorScheme: 'light',
        darkTheme: false,
        inputStyle: 'outlined',
        language: 'en',
        menuMode: 'static',
        menuTheme: 'colorScheme',
        preset: 'Aura',
        primary: 'indigo',
        ripple: false,
        showVsoftFun: false,
        surface: null
    };

    _state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        sidebarActive: false,
        anchored: false,
        overlaySubmenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
        activeMenuItem: null
    };

    layoutConfig = signal<layoutConfig>(this._config);

    layoutState = signal<LayoutState>(this._state);

    private configUpdate = new Subject<layoutConfig>();

    private overlayOpen = new Subject<any>();

    private menuSource = new Subject<MenuChangeEvent>();

    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();

    resetSource$ = this.resetSource.asObservable();

    configUpdate$ = this.configUpdate.asObservable();

    overlayOpen$ = this.overlayOpen.asObservable();

    isDarkTheme = computed(() => this.layoutConfig().darkTheme);

    isSlim = computed(() => this.layoutConfig().menuMode === 'slim');

    isSlimPlus = computed(() => this.layoutConfig().menuMode === 'slim-plus');

    isHorizontal = computed(() => this.layoutConfig().menuMode === 'horizontal');

    isOverlay = computed(() => this.layoutConfig().menuMode === 'overlay');

    transitionComplete = signal<boolean>(false);

    isSidebarStateChanged = computed(() => {
        const layoutConfig = this.layoutConfig();
        return layoutConfig.menuMode === 'horizontal' || layoutConfig.menuMode === 'slim' || layoutConfig.menuMode === 'slim-plus';
    });

    private initialized = false;

    private hasLoadedConfig = false;

    constructor() {
        effect(() => {
            const config = this.layoutConfig();
            if (config) {
                this.onConfigUpdate();
            }
        });

        effect(() => {
            const config = this.layoutConfig();

            if (!this.initialized || !config) {
                this.initialized = true;
                return;
            }

            this.handleDarkModeTransition(config);
        });

        effect(() => {
            this.isSidebarStateChanged() && this.reset();
        });
    }

    saveConfig() {
        if (!this.isBrowser) {
            return;
        }

        const payload: StoredLayoutConfigEnvelope = {
            version: this.storageVersion,
            config: this.layoutConfig()
        };

        try {
            localStorage.setItem(this.storageKey, JSON.stringify(payload));
        } catch {
            // Ignore storage errors (private mode, quota, blocked storage).
        }
    }

    loadConfig() {
        if (!this.isBrowser) {
            this.hasLoadedConfig = true;
            this.layoutConfig.set(this._config);
            return;
        }

        const config = this.getStoredConfig();

        if (config) {
            this._config = { ...this._config, ...config };
        }

        this.hasLoadedConfig = true;
        this.layoutConfig.set(this._config);
    }

    private getStoredConfig(): layoutConfig | null {
        const storedValue = localStorage.getItem(this.storageKey) ?? this.getLegacyStoredConfig();

        if (!storedValue) {
            return null;
        }

        try {
            const parsed = JSON.parse(storedValue) as unknown;

            if (this.isStoredLayoutConfigEnvelope(parsed)) {
                return this.migrateStoredConfig(parsed.version, parsed.config);
            }

            if (this.isLayoutConfigRecord(parsed)) {
                return this.migrateStoredConfig(0, parsed);
            }

            return null;
        } catch {
            return null;
        }
    }

    private migrateStoredConfig(version: number, config: Partial<layoutConfig>): layoutConfig | null {
        switch (version) {
            case 0:
            case 1:
                return config as layoutConfig;
            default:
                return null;
        }
    }

    private isStoredLayoutConfigEnvelope(value: unknown): value is StoredLayoutConfigEnvelope {
        if (!this.isObjectRecord(value)) {
            return false;
        }

        return typeof value['version'] === 'number' && this.isLayoutConfigRecord(value['config']);
    }

    private isLayoutConfigRecord(value: unknown): value is Partial<layoutConfig> {
        if (!this.isObjectRecord(value)) {
            return false;
        }

        const configKeys: Array<keyof layoutConfig> = ['colorScheme', 'darkTheme', 'inputStyle', 'language', 'menuMode', 'menuTheme', 'preset', 'primary', 'ripple', 'showVsoftFun', 'surface'];

        return configKeys.some((key) => key in value);
    }

    private isObjectRecord(value: unknown): value is Record<string, unknown> {
        return !!value && typeof value === 'object' && !Array.isArray(value);
    }

    private getLegacyStoredConfig(): string | null {
        for (const key of this.legacyStorageKeys) {
            const value = localStorage.getItem(key);
            if (value) {
                return value;
            }
        }

        return null;
    }

    private handleDarkModeTransition(config: layoutConfig): void {
        const supportsViewTransition = 'startViewTransition' in document;

        if (supportsViewTransition) {
            this.startViewTransition(config);
        } else {
            this.toggleDarkMode(config);
            this.onTransitionEnd();
        }
    }

    private startViewTransition(config: layoutConfig): void {
        const transition = (document as any).startViewTransition(() => {
            this.toggleDarkMode(config);
        });

        transition.ready
            .then(() => {
                this.onTransitionEnd();
            })
            .catch(() => {});
    }

    toggleDarkMode(config?: layoutConfig): void {
        const _config = config || this.layoutConfig();
        if (_config.darkTheme) {
            document.documentElement.classList.add('app-dark');
        } else {
            document.documentElement.classList.remove('app-dark');
        }
    }

    private onTransitionEnd() {
        this.transitionComplete.set(true);
        setTimeout(() => {
            this.transitionComplete.set(false);
        });
    }

    onMenuToggle() {
        if (this.isOverlay()) {
            this.layoutState.update((prev) => ({ ...prev, overlayMenuActive: !this.layoutState().overlayMenuActive }));

            if (this.layoutState().overlayMenuActive) {
                this.overlayOpen.next(null);
            }
        }

        if (this.isDesktop()) {
            this.layoutState.update((prev) => ({ ...prev, staticMenuDesktopInactive: !this.layoutState().staticMenuDesktopInactive }));
        } else {
            this.layoutState.update((prev) => ({ ...prev, staticMenuMobileActive: !this.layoutState().staticMenuMobileActive }));

            if (this.layoutState().staticMenuMobileActive) {
                this.overlayOpen.next(null);
            }
        }
    }
    onConfigUpdate() {
        this._config = { ...this.layoutConfig() };

        if (this.hasLoadedConfig) {
            this.saveConfig();
        }

        this.configUpdate.next(this.layoutConfig());
    }

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }

    onOverlaySubmenuOpen() {
        this.overlayOpen.next(null);
    }

    showProfileSidebar() {
        this.layoutState.update((state) => ({
            ...state,
            profileSidebarVisible: true
        }));
    }

    showConfigSidebar() {
        this.layoutState.update((state) => ({
            ...state,
            configSidebarVisible: true
        }));
    }

    hideConfigSidebar() {
        this.layoutState.update((prev) => ({ ...prev, configSidebarVisible: false }));
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return !this.isDesktop();
    }
}
