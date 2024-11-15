export const serverError = { message: "Server Error!" };

export const successCreation = { message: "Successfully Created." };
export const successUpdate = { message: "Successfully Updated." };
export const successDeletion = { message: "Successfully Deleted." };
export const validToken = { message: "The token is valid." };
export const codeSent = { message: "The code is sent to your email." };

export const emailExist = {
  message: "This email already exists!",
  code: "P2001",
};
export const nameTooLong = {
  message: "The name provided is too long!",
  code: "P2008",
};
export const missingData = { message: "Missing Data!", code: "P2000" };
export const invalidEmail = { message: "Invalid Email!", code: "P2002" };
export const userNotFound = {
  message: "This user is not found!",
  code: "P2004",
};
export const newsNotFound = {
  message: "This news is not found!",
  code: "P2014",
};
export const eventNotfound = {
  message: "This event is not found!",
  code: "P2007",
};
export const callNotFound = {
  message: "This call is not found!",
  code: "P2006",
};
export const unauthorized = { message: "Unauthorized!", code: "P2003" };
export const invalidToken = { message: "Invalid Token!", code: "P2005" };
export const wrongCode = {
  message: "The provided code is wrong!",
  code: "P2011",
};
export const wrongData = {
  message: "The sent data is incorrect!",
  code: "P2012",
};
export const codeTimeOut = { message: "The code is invalid!", code: "P2013" };
export const inactiveAccount = {
  message: "The account is still inactive!",
  code: "P2009",
};
export const forbidden = { message: "Forbidden!", code: "P2015" };
export const accountAlreadyActivated = {
  message: "This account is already activated!",
  code: "P2016",
};
export const invalidDate = { message: "Invalid Date!", code: "P2017" };
export const invalidDataFormat = {
  message: "Invalid Data Format!",
  code: "P2018",
};

// Setting the maximum number of objects that will be returned in the pagination, the path of the image and the domain name
export const PAGINATE_BY = 30;
export const IMAGES_NEWS = "/app/images/news/";
export const DOMAIN_NAME = "https://www.associamed.tn";

// Setting the constants of the gender type
export const MALE = "Male";
export const FEMALE = "Female";

