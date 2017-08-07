export declare const UnknownDependenciesMessage: (type: string) => string;
export declare const UNHANDLED_RUNTIME_EXCEPTION: string;
export declare const INVALID_EXCEPTION_TRAP: string;
export declare const UNKNOWN_MAPPING: (name, decorator, type) => string;
export declare const IMPROPER_MAPPING: (name, decorator, type) => string;
export declare const MISSING_REQUIRED_OPTION: (option) => string;
export declare const SHORT_FLAG_OPTION_MAPPING: (option_typename) => string;
export declare const SHORT_FLAG_VALID_ASCII_MAPPING: (option_typename) => string;
export declare const VALID_STRING_MAPPING: (option_property, option_typename, target) => string;
export declare const VALID_REGEXP_MAPPING: (option_property, option_typename, target) => string;
export declare const FULL_FLAG_VALID_ASCII_DASH_MAPPING:  (option_typename: string) => string;;
export declare const FLAG_REQUIREMENT_PROVISO: (option_typename: string) => string;
export declare const FLAG_OPTIONAL_PROVISO: (option_typename: string) => string;
export declare const REGEXP_COERCION_PRESENT: (option_typename: string) => string;
export declare const REGEX_OPTION_INVALID: (option: string) => string;
export declare const PROGRAM_ARG_METADATA_INVALID: (program_type) => string;
export declare const INVALID_STRING_ARG: (arg_type, arg_typename, arg_meta_type) => string;
export declare const INVALID_ARRAY_ARG: (arg_type, arg_typename, arg_meta_type) => string;
export declare const INVALID_CLASS_ARG: (arg_type, arg_typename, arg_meta_type, class_type) => string;
export declare const PROGRAM_ARG_NO_REQUIRED: (arg_type, arg_meta_type) => string;
export declare const PROGRAM_ARG_NO_EXECUTE: (arg_type, arg_meta_type) => string;
export declare const NOT_ALL_REQUIRED_ARGS_PASSED:(arg_type, arg_meta_type) => string;
export declare const NO_VARIADIC_AND_OPTIONAL_ARG: (arg_type, arg_meta_type) => string;
export declare const REQ_VARIADIC_AND_OPTIONAL_ARG: (arg_type, arg_meta_type) => string;
export declare const INVALID_ARG_CHARACTERS: (arg, arg_type, arg_meta_type) => string;
export declare const IMPROPER_PROGRAM: (primary, secondary, program_name) => string;
export declare const INVALID_COMMAND_ARG: (arg_type, arg_typename, arg_meta_type) => string;
export declare const INVALID_ASCII_MAPPING: (property, typename, arg_meta_type) => string;
export declare const INVALID_VERB_ASCII_MAPPING: (property, typename, arg_meta_type) => string;
export declare const INVALID_COMMAND: (command) => string;
export declare const REGEXP_NEEDS_FLAGARG: (type, regexpfield, flagfield) => string;
export declare const INVALID_BOOLEAN_MAPPING: (property, typename, arg_meta_type) => string;