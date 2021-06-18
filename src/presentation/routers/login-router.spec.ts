interface customHttpBody {
  email?: string;
  password?: string;
}

interface customHttpRequest {
  body?: customHttpBody;
}

interface customHttpResponse {
  statusCode?: number;
  body?: any;
}

class LoginRouter {
  route(httpRequest: customHttpRequest): customHttpResponse | undefined {
    if (!httpRequest.body?.email) {
      return {
        statusCode: 400,
      };
    }
  }
}

describe('Login Router', () => {
  it('should return 400 if no email is provided', () => {
    const sutloginRouter = new LoginRouter();

    const httpRequest: customHttpRequest = {
      body: {
        password: 'anything',
      },
    };

    const httpResponse = sutloginRouter.route(httpRequest);
    expect(httpResponse?.statusCode).toBe(400);
  });
});
