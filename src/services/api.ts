import { API_CONFIG } from "@/config/api";

const handleResponse = async (response: Response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch');
  }
  return { success: response.ok, data };
};

export const productsApi = {
  getAll: async (params: any) => {
    const queryParams = new URLSearchParams(params).toString();
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/products?${queryParams}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Products API getAll error:', error);
      throw error;
    }
  },

  getById: async (id: number) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/products/${id}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Products API getById error:', error);
      throw error;
    }
  },

  create: async (productData: any) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Products API create error:', error);
      throw error;
    }
  },

  update: async (id: string | number, productData: any) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Products API update error:', error);
      throw error;
    }
  },

  delete: async (id: number) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/products/${id}`, {
        method: 'DELETE',
      });
     return handleResponse(response);
    } catch (error) {
      console.error('Products API delete error:', error);
      throw error;
    }
  },

  adjustStock: async (id: string | number, adjustmentData: any) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/products/${id}/adjust-stock`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adjustmentData)
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Products API adjustStock error:', error);
      throw error;
    }
  }
};

export const inventoryApi = {
  getAll: async (params: any) => {
    const queryParams = new URLSearchParams(params).toString();
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/inventory?${queryParams}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Inventory API getAll error:', error);
      throw error;
    }
  },

  getMovements: async (params: any) => {
    const queryParams = new URLSearchParams(params).toString();
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/inventory/movements?${queryParams}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Inventory API getMovements error:', error);
      throw error;
    }
  }
};

export const salesApi = {
  getAll: async (params: any) => {
     const queryParams = new URLSearchParams(params).toString();
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/sales?${queryParams}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Sales API getAll error:', error);
      throw error;
    }
  },

  getById: async (id: number) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/sales/${id}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Sales API getById error:', error);
      throw error;
    }
  },

   create: async (saleData: any) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/sales`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saleData)
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Sales API create error:', error);
      throw error;
    }
  },

  update: async (id: number, saleData: any) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/sales/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saleData)
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Sales API update error:', error);
      throw error;
    }
  },

  delete: async (id: number) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/sales/${id}`, {
        method: 'DELETE',
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Sales API delete error:', error);
      throw error;
    }
  }
};

export const customersApi = {
  getAll: async (params: any) => {
    const queryParams = new URLSearchParams(params).toString();
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/customers?${queryParams}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Customers API getAll error:', error);
      throw error;
    }
  },

  getById: async (id: number) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/customers/${id}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Customers API getById error:', error);
      throw error;
    }
  },

   create: async (customerData: any) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData)
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Customers API create error:', error);
      throw error;
    }
  },

  update: async (id: number, customerData: any) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/customers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData)
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Customers API update error:', error);
      throw error;
    }
  },

  delete: async (id: number) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/customers/${id}`, {
        method: 'DELETE',
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Customers API delete error:', error);
      throw error;
    }
  }
};

export const categoriesApi = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/categories`);
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error('Categories API getAll error:', error);
      throw error;
    }
  },

  create: async (categoryData: { name: string }) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData)
      });
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error('Categories API create error:', error);
      throw error;
    }
  },

  update: async (id: string | number, categoryData: { name: string }) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/categories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData)
      });
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error('Categories API update error:', error);
      throw error;
    }
  },

  delete: async (id: string | number) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/categories/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error('Categories API delete error:', error);
      throw error;
    }
  }
};

export const unitsApi = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/units`);
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error('Units API getAll error:', error);
      throw error;
    }
  },

  create: async (unitData: { name: string }) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/units`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(unitData)
      });
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error('Units API create error:', error);
      throw error;
    }
  },

  update: async (id: number, unitData: { name: string }) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/units/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(unitData)
      });
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      console.error('Units API update error:', error);
      throw error;
    }
  },

  delete: async (id: number) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/units/${id}`, {
        method: 'DELETE',
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Units API delete error:', error);
      throw error;
    }
  }
};
