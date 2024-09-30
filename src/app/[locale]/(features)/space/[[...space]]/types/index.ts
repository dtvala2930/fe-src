export type WorkingHours = {
  workingStart: string;
  workingEnd: string;
};

export type DailyWorkingHours = {
  data: {
    Monday: WorkingHours;
    Tuesday: WorkingHours;
    Wednesday: WorkingHours;
    Thursday: WorkingHours;
    Friday: WorkingHours;
    Saturday: WorkingHours;
    Sunday: WorkingHours;
  };
};
