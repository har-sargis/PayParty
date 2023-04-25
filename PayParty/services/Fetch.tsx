class FetchService {
  async get<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json() as T;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async post<T>(url: string, body: any): Promise<T> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json() as T;
      return data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }

  async put<T>(url: string, body: any): Promise<T> {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json() as T;
      return data;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json() as T;
      return data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  }
}

export default new FetchService();
