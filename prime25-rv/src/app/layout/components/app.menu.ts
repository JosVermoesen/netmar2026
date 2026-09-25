import { Component, effect, inject, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/core/services/account-service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [AppMenuitem, RouterModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `<ul class="layout-menu">
        @for (item of model; track $index; let i = $index) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [index]="i" [root]="true"></li>
            }
            @if (item.separator) {
                <li class="menu-separator"></li>
            }
        }
    </ul>`
})
export class AppMenu implements OnInit, OnDestroy {
    ts = inject(TranslateService);
    accountService = inject(AccountService);

    useMar = environment.useMar;
    useShop = environment.useShop;

    model: any[] = [];

    private langChangeSub?: Subscription;

    constructor() {
        effect(() => {
            this.accountService.currentUser();
            this.rebuildModel();
        });
    }

    ngOnInit() {
        const modelApollo = [
            {
                label: 'Dashboards',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'E-Commerce',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard-ecommerce']
                    },
                    {
                        label: 'Banking',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/dashboard-banking']
                    }
                ]
            },
            {
                label: 'Apps',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Blog',
                        icon: 'pi pi-fw pi-comment',
                        items: [
                            {
                                label: 'List',
                                icon: 'pi pi-fw pi-image',
                                routerLink: ['/apps/blog/list']
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-list',
                                routerLink: ['/apps/blog/detail']
                            },
                            {
                                label: 'Edit',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/apps/blog/edit']
                            }
                        ]
                    },

                    {
                        label: 'Chat',
                        icon: 'pi pi-fw pi-comments',
                        routerLink: ['/apps/chat']
                    },
                    {
                        label: 'Files',
                        icon: 'pi pi-fw pi-folder',
                        routerLink: ['/apps/files']
                    },
                    {
                        label: 'Kanban',
                        icon: 'pi pi-fw pi-sliders-v',
                        routerLink: ['/apps/kanban']
                    },
                    {
                        label: 'Mail',
                        icon: 'pi pi-fw pi-envelope',
                        items: [
                            {
                                label: 'Inbox',
                                icon: 'pi pi-fw pi-inbox',
                                routerLink: ['/apps/mail/inbox']
                            },
                            {
                                label: 'Compose',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/apps/mail/compose']
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-comment',
                                routerLink: ['/apps/mail/detail/1000']
                            }
                        ]
                    },
                    {
                        label: 'Task List',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/apps/tasklist']
                    }
                ]
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-fw pi-star-fill',
                items: [
                    {
                        label: 'Form Layout',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/uikit/formlayout']
                    },
                    {
                        label: 'Input',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/uikit/input']
                    },

                    {
                        label: 'Button',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/uikit/button']
                    },
                    {
                        label: 'Table',
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/uikit/table']
                    },
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/uikit/list']
                    },
                    {
                        label: 'Tree',
                        icon: 'pi pi-fw pi-share-alt',
                        routerLink: ['/uikit/tree']
                    },
                    {
                        label: 'Panel',
                        icon: 'pi pi-fw pi-tablet',
                        routerLink: ['/uikit/panel']
                    },
                    {
                        label: 'Overlay',
                        icon: 'pi pi-fw pi-clone',
                        routerLink: ['/uikit/overlay']
                    },
                    {
                        label: 'Media',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/uikit/media']
                    },
                    {
                        label: 'Menu',
                        icon: 'pi pi-fw pi-bars',
                        routerLink: ['/uikit/menu'],
                        routerLinkActiveOptions: {
                            paths: 'subset',
                            queryParams: 'ignored',
                            matrixParams: 'ignored',
                            fragment: 'ignored'
                        }
                    },
                    {
                        label: 'Message',
                        icon: 'pi pi-fw pi-comment',
                        routerLink: ['/uikit/message']
                    },
                    {
                        label: 'File',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/uikit/file']
                    },
                    {
                        label: 'Chart',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/uikit/charts']
                    },
                    {
                        label: 'Misc',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/uikit/misc']
                    }
                ]
            },
            {
                label: 'Prime Blocks',
                icon: 'pi pi-fw pi-prime',
                items: [
                    {
                        label: 'Free Blocks',
                        icon: 'pi pi-fw pi-eye',
                        routerLink: ['/blocks']
                    },
                    {
                        label: 'All Blocks',
                        icon: 'pi pi-fw pi-globe',
                        url: ['https://blocks.primeng.org'],
                        target: '_blank'
                    }
                ]
            },
            {
                label: 'Utilities',
                icon: 'pi pi-fw pi-compass',
                items: [
                    {
                        label: 'Figma',
                        icon: 'pi pi-fw pi-pencil',
                        url: ['https://www.figma.com/file/zQOW0XBXdCTqODzEOqwBtt/Preview-%7C-Apollo-2022?node-id=335%3A21768&t=urYI89V3PLNAZEJG-1/'],
                        target: '_blank'
                    }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            },
                            {
                                label: 'Register',
                                icon: 'pi pi-fw pi-user-plus',
                                routerLink: ['/auth/register']
                            },
                            {
                                label: 'Forgot Password',
                                icon: 'pi pi-fw pi-question',
                                routerLink: ['/auth/forgotpassword']
                            },
                            {
                                label: 'New Password',
                                icon: 'pi pi-fw pi-cog',
                                routerLink: ['/auth/newpassword']
                            },
                            {
                                label: 'Verification',
                                icon: 'pi pi-fw pi-envelope',
                                routerLink: ['/auth/verification']
                            },
                            {
                                label: 'Lock Screen',
                                icon: 'pi pi-fw pi-eye-slash',
                                routerLink: ['/auth/lockscreen']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },

                    {
                        label: 'Invoice',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/pages/invoice']
                    },
                    {
                        label: 'About Us',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/pages/aboutus']
                    },
                    {
                        label: 'Help',
                        icon: 'pi pi-fw pi-question-circle',
                        routerLink: ['/pages/help']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    },
                    {
                        label: 'FAQ',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/pages/faq']
                    },
                    {
                        label: 'Contact Us',
                        icon: 'pi pi-fw pi-phone',
                        routerLink: ['/pages/contact']
                    }
                ]
            },
            {
                label: 'E-Commerce',
                icon: 'pi pi-fw pi-wallet',
                items: [
                    {
                        label: 'Product Overview',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['ecommerce/product-overview']
                    },
                    {
                        label: 'Product List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['ecommerce/product-list']
                    },
                    {
                        label: 'New Product',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['ecommerce/new-product']
                    },
                    {
                        label: 'Shopping Cart',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['ecommerce/shopping-cart']
                    },
                    {
                        label: 'Checkout Form',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['ecommerce/checkout-form']
                    },
                    {
                        label: 'Order History',
                        icon: 'pi pi-fw pi-history',
                        routerLink: ['ecommerce/order-history']
                    },
                    {
                        label: 'Order Summary',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['ecommerce/order-summary']
                    }
                ]
            },
            {
                label: 'User Management',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['profile/list']
                    },
                    {
                        label: 'Create',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['profile/create']
                    }
                ]
            },
            {
                label: 'Hierarchy',
                icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.1.1',
                                        icon: 'pi pi-fw pi-align-left'
                                    },
                                    {
                                        label: 'Submenu 1.1.2',
                                        icon: 'pi pi-fw pi-align-left'
                                    },
                                    {
                                        label: 'Submenu 1.1.3',
                                        icon: 'pi pi-fw pi-align-left'
                                    }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 1.2.1',
                                        icon: 'pi pi-fw pi-align-left'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.1.1',
                                        icon: 'pi pi-fw pi-align-left'
                                    },
                                    {
                                        label: 'Submenu 2.1.2',
                                        icon: 'pi pi-fw pi-align-left'
                                    }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {
                                        label: 'Submenu 2.2.1',
                                        icon: 'pi pi-fw pi-align-left'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Start',
                icon: 'pi pi-fw pi-download',
                items: [
                    {
                        label: 'Buy Now',
                        icon: 'pi pi-fw pi-shopping-cart',
                        url: ['https://www.primefaces.org/store']
                    },
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink: ['/documentation']
                    }
                ]
            }
        ];

        const modelDevelopment = [
            {
                label: 'Dev',
                icon: 'pi pi-shop',
                items: [
                    {
                        label: 'Prime Testing',
                        icon: 'pi pi-shop',
                        routerLink: ['/primetesting/dialog']
                    },
                    {
                        label: 'Test Error Handling',
                        icon: 'pi pi-bell',
                        routerLink: ['/test-error']
                    }
                ]
            }
        ];

        this.rebuildModel();

        this.langChangeSub = this.ts.onLangChange.subscribe(() => {
            this.rebuildModel();
        });
    }

    ngOnDestroy(): void {
        this.langChangeSub?.unsubscribe();
    }

    private rebuildModel(): void {
        const modelShopping = [
            {
                label: 'Shopping',
                icon: 'pi pi-shop',
                items: [
                    {
                        label: 'Shop',
                        icon: 'pi pi-shop',
                        routerLink: ['/features/shop']
                    },
                    {
                        label: 'Cart',
                        icon: 'pi pi-shopping-cart',
                        routerLink: ['/features/cart']
                    }
                ]
            }
        ];

        const modelMar = [
            {
                label: 'Bedrijfsdata',
                icon: 'pi pi-book',
                items: [
                    {
                        label: 'Customers',
                        icon: 'pi pi-shopping-bag',
                        routerLink: ['/features/mar/customers']
                    },
                    {
                        label: 'Suppliers',
                        icon: 'pi pi-shop',
                        routerLink: ['/features/mar/suppliers']
                    },
                    {
                        label: 'Ledgeraccounts',
                        icon: 'pi pi-wallet',
                        routerLink: ['/features/mar/ledgeraccounts']
                    }
                ]
            }
        ];

        const anonymousVsoft1985 = {
            label: 'Vsoft sinds 1985',
            icon: 'pi pi-home',
            items: [
                {
                    label: this.ts.instant('MENU.Accounting'),
                    icon: 'pi pi-fw pi-home',
                    routerLink: ['/accounting']
                },
                {
                    label: this.ts.instant('MENU.Service'),
                    icon: 'pi pi-fw pi-image',
                    routerLink: ['/hosting']
                }
            ]
        };

        const anonymousJustForFun = {
            label: 'Just For Fun',
            icon: 'pi pi-home',
            items: [
                {
                    label: this.ts.instant('MENU.InsurancesMedia'),
                    icon: 'pi pi-fw pi-image',
                    routerLink: ['/justforfun/jff-media']
                }
            ]
        };

        const anonymousInsurance1935 = {
            label: this.ts.instant('MENU.Insurances'),
            icon: 'pi pi-home',
            items: [
                {
                    label: this.ts.instant('MENU.OnlineOffers'),
                    icon: 'pi pi-fw pi-comment',
                    items: [
                        {
                            label: this.ts.instant('MENU.Dkv'),
                            icon: 'pi pi-fw pi-image',
                            routerLink: ['/insurances/insurers/dkv-offers']
                        },
                        {
                            label: this.ts.instant('MENU.Ea'),
                            icon: 'pi pi-fw pi-list',
                            routerLink: ['/insurances/insurers/ea-offers']
                        }
                    ]
                },
                {
                    label: this.ts.instant('MENU.InsurancesMain'),
                    icon: 'pi pi-fw pi-home',
                    routerLink: ['/insurances']
                },
                {
                    label: this.ts.instant('MENU.InsurancesMedia'),
                    icon: 'pi pi-fw pi-image',
                    routerLink: ['/insurances/ins-media']
                },
                {
                    label: this.ts.instant('MENU.ListInsurers'),
                    icon: 'pi pi-fw pi-image',
                    routerLink: ['/insurances/insurers']
                }
            ]
        };

        this.model = [anonymousInsurance1935, anonymousVsoft1985];

        if (this.useShop) {
            this.model.push(...modelShopping);
        }

        if (this.useMar && this.accountService.currentUser()) {
            this.model.push(...modelMar);
        }

        this.model.push(anonymousJustForFun);
    }
}
