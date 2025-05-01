import { expect } from 'chai';
import supertest from 'supertest';

const request = supertest('http://localhost:8080');

describe("Test de integración módulo Adopciones", () => {
  let token;
  let userId;
  let petId;

  before(async () => {
    // Registrar y loguear un usuario para pruebas
    const registerRes = await request.post("/api/auth/register").send({
      first_name: "Adopter",
      last_name: "Test",
      email: "adopt@test.com",
      password: "123456",
    });

    expect(registerRes.status).to.equal(201);
    userId = registerRes.body._id;

    const loginRes = await request.post("/api/auth/login").send({
      email: "adopt@test.com",
      password: "123456",
    });
    expect(loginRes.status).to.equal(200);
    token = loginRes.body.token;
  });

  it("[POST] /api/adoptions - Debe crear una adopción", async () => {
    const createPetRes = await request.post("/api/pets").set('Authorization', `Bearer ${token}`).send({
      name: "Luna",
      specie: "Gato",
      birthDate: "2022-01-01",
    });
    expect(createPetRes.status).to.equal(201);
    petId = createPetRes.body._id;

    const adoptionRes = await request.post("/api/adoptions").set('Authorization', `Bearer ${token}`).send({
      owner: userId,
      pet: petId,
    });

    expect(adoptionRes.status).to.equal(201);
    expect(adoptionRes.body.owner).to.exist;
    expect(adoptionRes.body.pet).to.exist;
  });

  it("[GET] /api/adoptions - Debe obtener todas las adopciones", async () => {
    const res = await request.get("/api/adoptions");
    expect(res.status).to.equal(200);
    expect(Array.isArray(res.body)).to.be.true;
  });

  it("[GET] /api/adoptions/:id - Debe obtener una adopción por ID", async () => {
    const allAdoptions = await request.get("/api/adoptions");
    const adoptionId = allAdoptions.body[0]._id;

    const res = await request.get(`/api/adoptions/${adoptionId}`);
    expect(res.status).to.equal(200);
    expect(res.body._id).to.equal(adoptionId);
  });

  after(async () => {
    await request.delete(`/api/pets/${petId}`).set('Authorization', `Bearer ${token}`);
    await request.delete(`/api/users/${userId}`);
  });
});