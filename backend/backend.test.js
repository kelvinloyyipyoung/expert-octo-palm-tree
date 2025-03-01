const request = require('supertest');
const app = require('./app');

// Disable console.log during tests
beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  console.log.mockRestore();
  console.error.mockRestore();
});

describe('API Endpoints', () => {
  describe('GET /api/search', () => {
    test('should return 400 if game parameter is missing', async () => {
      const response = await request(app).get('/api/search');
      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('error');
    });

    test('should return game data when valid game parameter is provided', async () => {
      const response = await request(app).get('/api/search?game=Fortnite');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('gameTitle', 'Fortnite');
      expect(response.body).toHaveProperty('platforms');
      expect(response.body).toHaveProperty('crossPlay');
      expect(Array.isArray(response.body.platforms)).toBe(true);
      expect(Array.isArray(response.body.crossPlay)).toBe(true);
    }, 5000); // Increase timeout due to the 1 second delay in the endpoint
  });

  describe('Static File Serving', () => {
    test('should serve index.html for root path', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('<!DOCTYPE html>');
      expect(response.text).toContain('Expert Octo Palm Tree');
    });
  });
});