// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import App from '../app';
// import usersModel from '../database/models/UsersModel';

// import { Response } from 'superagent';
// import { request } from 'http';

// chai.use(chaiHttp);

// const { app } = new App();

// const { expect } = chai;

// describe('Teste de users', function () {
//     describe('model', function () {
  
//       it('Verifica se ao inserir dados corretos é possivel fazer login', async function () {
//         const login = {
//             email: 'admin@admin.com',
//             password: 'secret_admin'
//         }
//         const response = await chai
//         .request(app)
//         .post('/login');

//         expect(response.status).to.be.equal(200)
//         expect(response.body.login).to.deep.equal(login);
//       });
  
//       it('Verifica se ao inserir dados incorretos é possivel fazer login', async function () {
       
//       })
  
//       afterEach(sinon.restore);
//   });
//   describe('service', function () {
  
//     it('...', async function () {
     
//     });

//     it('...', async function () {
   
//     })

//     afterEach(sinon.restore);
// });
// describe('controller', function () {
  
//     it('...', async function () {
     
//     });

//     it('...', async function () {
    
//     })

//     afterEach(sinon.restore);
// });
//   });