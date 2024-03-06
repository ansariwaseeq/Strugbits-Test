# strugBits

Greetings to strugBits, a messaging platform designed for smooth communication! Within this repository, you'll discover the source code for the entire project.

## Getting Started

### Clone the Repository

To get started with strugBits, clone the repository using the following command:
```bash
git clone https://github.com/ansariwaseeq/strugbits.git
```
### Database Used MONGODB

## Install dependencies
```
cd strugBits
npm install
```
## Run the application.
```bash
npm start
```

Visit http://localhost:3000/auth/interaction/register in your web browser to initiate the registration process.

1. Upon completing the registration, you will be redirected to auth/interaction/login.

2. Input your login credentials to finalize the login procedure.

3. After successfully logging in, commence your chat sessions and relish the strugBits experience!

## Fetch all your undeleted msgs 
```
endPoint : http://localhost:3000/v1/chats/get-all-chats 
```
## Search in the chats 
```
endPoint : http://localhost:3000/v1/chats/show-chat?search='your-searched-word'
```

## Msgs can be deleted !!
run on any API Platform ( POSTMAN )
#### Delete for me !
```
endPoint : localhost:3000/v1/chats/delete-for-me/:chatId 
```
#### Delete for Everyone !
```
endPoint : localhost:3000/v1/chats/delete-for-everyone/65adc4d477726c885b769dcb
```
