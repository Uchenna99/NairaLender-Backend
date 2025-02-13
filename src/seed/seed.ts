import { PrismaClient } from "@prisma/client";
import { error } from "console";
import * as fs from "fs"
import * as path from "path"


interface BankObject {
    name: string;
    image: string;
}

const prisma = new PrismaClient();


async function main() {
    const banksList: BankObject[] = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "banks.json"), "utf-8")
    );
    for(const bank of banksList) {
        await prisma.banks.upsert({
            where: {name: bank.name},
            update: {},
            create: {
                name: bank.name,
                image: bank.image
            }
        })
    }
}


main()
.then(async()=>{
    await prisma.$disconnect();
})
.catch(async(error)=>{
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});