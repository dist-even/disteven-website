export class ConfirmWindowSettings {
    public title: string;
    public message: string;
    public secondaryMessage: string;
    public confirmationCheckboxLabel: string;
    public isConfirmationCheckboxFieldRequired: boolean;
    public confirmButtonText: string;
    public cancelButtonText: string;
    public confirmButtonBackgroundColor: string;
    /**
     * if [true] then it hides the "close and cross" buttons
    */
    public isAlertDialogBox: boolean;

    constructor(args) {
        this.title = args.title;
        this.message = args.message;
        this.secondaryMessage = args.secondaryMessage;
        this.confirmationCheckboxLabel = args.confirmationCheckboxLabel;
        this.isConfirmationCheckboxFieldRequired = args.isConfirmationCheckboxFieldRequired;
        this.confirmButtonText = args.confirmButtonText || 'Confirm';
        this.cancelButtonText = args.cancelButtonText || 'Cancel';
        this.confirmButtonBackgroundColor = args.confirmButtonBackgroundColor || 'btn-primary';
        this.isAlertDialogBox = args.isAlertDialogBox || false;
    }
}
