export class General {
  constructor(
    public name: string,
    public socials: string,
    public email: string,
    public phoneNumber: string) {
  }

}

export class Summary {
  constructor(public summary: string) {
  }
}

export class Education{
  constructor(public school: string, public location: string,
              public start: Date, public end: Date,
              public current: boolean, public degree: string) {
  }
}

export class Experience {
  constructor(public company: string, public location: string,
              public start: Date, public end: Date,
              public current: boolean, public description: string) {
  }
}

export class Skills {
  constructor(public description: string) {
  }
}

export class Projects {
  constructor(public title: string, public description: string) {
  }
}

export class Achievements {
  constructor(public issuer: string,
              public name: string,
              public issueDate: Date) {
  }
}

export class Websites {
  constructor(public website: string) {
  }
}

export class Resume {
  constructor(general: General, summary: Summary,
              education: Education[], experience: Experience[],
              skills: Skills, projects: Projects[],
              achievements: Achievements[], websites: Websites) {
  }
}
