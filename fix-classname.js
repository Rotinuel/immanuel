import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import path from "path";

function walk(dir, filelist = []) {
    for (const file of readdirSync(dir)) {
        const fullPath = path.join(dir, file);

        if (statSync(fullPath).isDirectory()) {
            walk(fullPath, filelist);
        } else if (/\.(js|jsx|ts|tsx)$/.test(fullPath)) {
            filelist.push(fullPath);
        }
    }
    return filelist;
}

const files = walk(".");

for (const file of files) {
    let content = readFileSync(file, "utf8");

    const updated = content.replace(
        /className="([\s\S]*?)"/g,
        (match, p1) => {
            const cleaned = p1
                .split("\n")
                .map(line => line.trim())
                .filter(Boolean)
                .join(" ");

            return `className="${cleaned}"`;
        }
    );

    if (content !== updated) {
        writeFileSync(file, updated);
        console.log("Fixed:", file);
    }
}