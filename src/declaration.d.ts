import { Email } from "./types";

declare global {
    namespace Vike {
        interface Config {
            author?: Email;
            creationDate?: Date;
            lastUpdateDate?: Date;
        }
    }
}

export {};
