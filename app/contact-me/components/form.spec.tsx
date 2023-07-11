import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from "react";
import { Form } from './form';
import { setupServer } from 'msw/node';
import { rest } from "msw";
import "isomorphic-fetch";

const handlers = [
  rest.post('/api/contact', async (req, res, ctx) => {

    const { email } = await req.json();

    if (email === "bad_request@response.co.uk") {
      return res(ctx.status(400), ctx.json({
        message: "Bad request"
      }))
    } else if (email === "internal_error@response.co.uk") {
      return res(
        ctx.status(500),
        ctx.json({
          message: "Internal server error",
        })
      );
    }
    return res(ctx.status(200), ctx.json({ message: "Success!" }));
  })
]

const server = setupServer(...handlers);

describe('Contact Form component', () => {

  const consoleSpy = jest.spyOn(console, "log").mockImplementation();
  beforeAll(() => server.listen());
  afterEach(() => {
    server.restoreHandlers(),
      consoleSpy.mockClear()
  });
  afterAll(() => server.close());

  it("should submit the form and show a succesful message", async () => {
    render(<Form />);
    fireEvent.change(screen.getByLabelText('Nom'), {
      target: {
        value: "Sébastien",
      },
    });
    fireEvent.change(screen.getByLabelText('Entreprise'), {
      target: {
        value: "Seb entreprise",
      },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: {
        value: "Seb@gmail.com",
      },
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: {
        value: "Je suis sébastien pincepoche",
      },
    });
    fireEvent.submit(screen.getByRole('button', {
      name: "Envoyer message"
    }));

    await waitFor(() => {
      expect(screen.getByText('Message envoyé')).toBeInTheDocument()
    })




  });
  it('shoud handle 400 Bad Request response', async () => {
    render(<Form />);
    fireEvent.change(screen.getByLabelText('Nom'), {
      target: {
        value: "Sébastien",
      },
    });
    fireEvent.change(screen.getByLabelText('Entreprise'), {
      target: {
        value: "Seb entreprise",
      },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: {
        value: "bad_request@response.co.uk",
      },
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: {
        value: "Je suis sébastien pincepoche",
      },
    });
    fireEvent.submit(screen.getByRole('button', {
      name: "Envoyer message"
    }));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        "problem with the fetch operation HTTP error! status: 400"
      )
    })
  })
})