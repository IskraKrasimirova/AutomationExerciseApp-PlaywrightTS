export class ProductData {
    static readonly productNames: string[] = [
        "Blue Top",
        "Men Tshirt",
        "Sleeveless Dress",
        "Dress",
        "Top",
        "Polo",
        "Tshirt",
        "Jeans",
        "Saree"
    ];

    static getRandomProduct(): string {
        const index = Math.floor(Math.random() * this.productNames.length);
        return this.productNames[index];
    }
}