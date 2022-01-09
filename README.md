# Form Using React JS

This is a submit form created using React js, HTML and CSS. This form takes name, email and mobile data from the user and sends the data to a database using an API.

## API Reference

#### POST form data to postgres database

```http
  POST FormAPI/insert
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `json` | `JSON` | **Required**. Takes JSON object as Parameter. |

converts the data entered by the user in json format and posts it to the DB.

## Screenshots

![Alt text](/snapshots/form_1.png?raw=true "")

![Alt text](/snapshots/form_2.png?raw=true "")

![Alt text](/snapshots/form_3.png?raw=true "")


## Features

- Validates the input provided by the user
- Uses axios to send the data to backend
- Prints a success message after submission 
- Responsive platform


## Deployment

Install Node js

To install node modules:

```bash
  npm install
```
To start the project:

```bash
  npm start
```

