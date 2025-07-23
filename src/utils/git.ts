import SimpleGit from "simple-git";

export const git = SimpleGit({
    baseDir: process.cwd(),
    binary: "git",
    maxConcurrentProcesses: 6,
}).env("TZ", "America/Sao_Paulo");

export async function getLastUpdateDate(file: string) {
    try {
        const log = await git.raw([
            "log",
            "-1",
            "--format=%cd",
            "--date=iso-strict",
            "--",
            file,
        ]);

        const lastUpdatedDateString = log.trim();

        if (lastUpdatedDateString) {
            return lastUpdatedDateString;
        } else {
            return null;
        }
    } catch (error) {
        console.error(
            `Erro ao obter a data da última atualização de "${file}": ${error}`,
        );
        // Return current date as fallback when git is not available
        return new Date().toISOString();
    }
}

export async function getCreationDate(file: string) {
    try {
        const log = await git.raw([
            "log",
            "--diff-filter=A",
            "--format=%cd",
            "--date=iso-strict",
            "--",
            file,
        ]);

        const creationDateString = log.trim();

        if (creationDateString) {
            return creationDateString;
        } else {
            return null;
        }
    } catch (error) {
        console.error(`Erro ao obter a data da criação de "${file}": ${error}`);
        // Return current date as fallback when git is not available
        return new Date().toISOString();
    }
}
