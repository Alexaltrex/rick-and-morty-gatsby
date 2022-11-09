import {action,makeObservable, observable} from "mobx";

export class Store {
    burgerMenu: boolean = false

    constructor() {
        makeObservable(this,
            {
            burgerMenu: observable,
            setBurgerMenu: action.bound,
            }
        )
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu;
    }
}
export const store = new Store()
