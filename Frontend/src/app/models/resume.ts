import { Achievement } from './achievement';
import { Education } from './education';
import { Project } from './project';
import { Website } from './website';

export interface Resume {
    resumeId:number;
    name:string;
    email:string;
    location:string;
    summary:string;
    skills:string;
    achievements:Achievement[];
    educationList:Education[];
    projects:Project[];
    websites:Website[];
    //user_Id:number;
}
