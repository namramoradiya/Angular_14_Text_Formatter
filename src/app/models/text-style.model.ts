export class TextStyle {
    isBold: boolean;
    isItalic: boolean
    isUnderline: boolean;
    fontSize: number;

    constructor(isBold: boolean = false, isItalic: boolean = false, isUnderline: boolean = false, fontSize: number = 14) {
        this.isBold = isBold;
        this.isItalic = isItalic;
        this.isUnderline = isUnderline;
        this.fontSize = fontSize;
    }

    toggleBold(): void {
        this.isBold = !this.isBold;
    }
    toggleItalic(): void {
        this.isItalic = !this.isItalic;
    }
    toggleUnderline(): void {
        this.isUnderline = !this.isUnderline;
    }
    increaseFontSize(): void {
        this.fontSize += 1;
    }
    decreaseFontSize(): void {
        if (this.fontSize > 10) {
            this.fontSize -= 1;
        }
    }
    resetStyles(): void {
        this.isBold = false;
        this.isItalic = false;
        this.isUnderline = false;
        this.fontSize = 14;
    }
}