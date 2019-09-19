declare namespace AddonName {
    declare function validate(addonName: string): boolean;
    declare function sanitize(addonName: string): string;

    declare namespace CONSTANTS {
        export const VALIDATE_REGEX: string;
    }
}

export = AddonName;
