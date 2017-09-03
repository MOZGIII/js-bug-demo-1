// @flow
export const dummmmmmmmmmmmmmmmmmy = async (
    response: Response
  ): Promise<Response> => {
    if (!response.ok) {
      const text = await response.text();
      throw Error(text);
    }
    return response;
  };
  