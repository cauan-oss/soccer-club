import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import { teams, team } from "../tests/mocks/teams";
import teamsModel from "../database/models/TeamModel";
import matcheModel from "../database/models/Matches";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testando o teams", function () {
  
  describe("Testa getAllTeams", function () {
    it("Testando se retorna todos os times", async function () {
      sinon.stub(teamsModel, "findAll").resolves(teams as any);
      const response = await chai.request(app).get(`/teams`);
      expect(response.status).to.equal(200);
    });
  });
  
  
  describe("Testa teamsId ", function () {
    it("Testando se retorna um time", async function () {
      sinon.stub(teamsModel, "findByPk").resolves(team as any);
      const response = await chai.request(app).get(`/teams/${team.id}`);
      expect(response.status).to.equal(200);
    });
  });
  describe("Testa matchesId ", function () {
    it("Testando se retorna um time", async function () {
      sinon.stub(matcheModel, "findByPk").resolves(team as any);
      const response = await chai.request(app).get(`/teams/${team.id}`);
      expect(response.status).to.equal(200);
    });
  });
  afterEach(sinon.restore);
});

