import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToastMessage extends LightningElement {
    @api message;

    @api variant;

    @api mode;

    connectedCallback() {
        this.showToast();
    }

    showToast() {
        const toastEvent = new ShowToastEvent({
            title: 'Order created successfully!',
            message: this.message,
            variant: this.variant,
            mode: this.mode
        });
        this.dispatchEvent(toastEvent);
    }

}