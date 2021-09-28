

export interface Questionnaire {
    category_name_hyphenated: string;
    description: string;
    id: number;
    identifier: string;
    name: string;
    questions: Questions[]
}

export interface Questions {
    required: boolean;
    question_type: string;
    multiple: string;
    identifier: string;
    headline: string;
    description: string;
    jumps: Jumps[];
    choices: Choices[];
}

export interface Jumps {
    destination:{id : number};
    conditions:Conditions[];
}

export interface Choices {
    label: string;
    selected: boolean;
    value: string;
}

export interface Conditions{
    field:string;
    value:string;
}
