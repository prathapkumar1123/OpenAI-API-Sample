
# Open AI API Integration

A brief description of your project, including its purpose and key features.
  

## Table of Contents


[Getting Started](#getting-started)
[Installation](#installation)
[Usage](#usage)
[API Documentation](#api-documentation)
  

## Getting Started


Instructions to get a copy of the project running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or above)

- npm (v6 or above)

- dotenv package


### Installation

```bash
# Clone the repository
git  clone  https://github.com/your-repo/project-name.git

# Navigate into the project directory
cd  project-name

# Install dependencies
npm  install
```

  

## Usage

Ensure that you have a `.env` file with the required variables:
Add your OPEN AI api key here.

```env
OPEN_AI_KEY=your-api-key
```

To start the project, run:
```bash
npm start
```
  

## API Documentation

  

### Endpoints

#### `POST /api/generateText`

**Description:** Get the open ai generated output based on the prompt.

**Headers:** Not required at present.

**Request Body:**

```json
{
	"prompt": "Give me some interview tips"
}
```
---

  

### Sample Responses

#### Success Response

```json
{
	"status": 200,
	"message": "success" 
	"data": "Generated content output"
}
```

#### Error Response


```json
{
	"status": 429,
	"messsage": "429 You exceeded your current quota, please check your plan and billing details."
}
```