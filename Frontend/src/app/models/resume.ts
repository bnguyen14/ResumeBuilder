import { Achievement } from './achievement';
import { Education } from './education';
import { Experience } from './experience';
import { Project } from './project';
import { User } from './user';
import { Website } from './website';

export class Resume {
    constructor(
        // public resumeId:number,
        public resumeName:string,
        public name:string,
        public email:string,
        public location:string,
        public summary:string,
        public skills:string,
        public achievements:Achievement[],
        public educationList:Education[],
        public experiences:Experience[],
        public projects:Project[],
        public websites:Website[],
        public save_date:Date,
        public user:User
    ){}
    
}
