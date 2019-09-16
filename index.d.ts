declare namespace AddonName {
    declare function validate(addonName: string): boolean;
    declare function sanitize(addonName: string): string;
}

export = AddonName;
