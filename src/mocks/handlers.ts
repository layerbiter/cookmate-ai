import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/api/v1/auth', async ({ request }) => {
    const { username } = await request.json()
    return HttpResponse.json({
      app_type: "WEB",
      user: {
        uid: "user_abc123",
        username,
        token: {
          access: "mock-access-token",
          refresh: "mock-refresh-token"
        }
      }
    })
  }),

  http.get('/api/v1/onboarding/status', () => {
    return HttpResponse.json({ shown: false })
  }),

  http.post('/api/v1/onboarding', async () => {
    return new HttpResponse(null, { status: 200 })
  }),

  http.post('/api/v1/generate', () => {
    return HttpResponse.json({
      title: "Keto Salmon Bowl",
      ingredients: [
        "200g fresh salmon",
        "2 cups mixed greens",
        "1 avocado",
        "2 tbsp olive oil"
      ],
      instructions: [
        "Pan-sear the salmon",
        "Prepare the greens",
        "Slice avocado",
        "Assemble bowl"
      ]
    })
  })
]