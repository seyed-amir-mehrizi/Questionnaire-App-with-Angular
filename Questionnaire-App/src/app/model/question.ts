

    export interface Choice {
        label: string;
        value: string;
        selected: boolean;
    }

    export interface Condition {
        field: string;
        value: string;
    }

    export interface Destination {
        id: string;
    }

    export interface Jump {
        conditions: Condition[];
        destination: Destination;
    }

    export interface Question {
        question_type: string;
        identifier: string;
        headline: string;
        description?: string;
        required: boolean;
        multiple: string;
        choices: Choice[];
        jumps: Jump[];
        multiline: string;
    }

    export interface Questionnaire {
        id: number;
        identifier: string;
        name: string;
        questions: Question[];
        description: string;
        category_name_hyphenated: string;
    }

    export interface RootObject {
        questionnaire: Questionnaire;
    }



