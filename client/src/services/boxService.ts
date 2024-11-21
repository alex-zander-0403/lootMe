import { AxiosInstance, AxiosResponse } from 'axios';
import { BoxTypeDb, BoxTypeForm } from '../types/boxTypes';
import axiosInstance from './axiosInstance';
import BoxSchema from '../utils/validators';

class BoxService {
  constructor(private readonly client: AxiosInstance) {}

  async getBoxes(): Promise<BoxTypeDb[]> {
    const { data } = await this.client<BoxTypeDb[]>('/boxes');
    return BoxSchema.array().parse(data);
  }

  async addBox(myFormData: BoxTypeForm): Promise<BoxTypeDb> {
    const { data } = await this.client.post<BoxTypeDb>('/boxes', myFormData);
    return BoxSchema.parse(data);
  }

  async deleteBox(id: BoxTypeDb['id']): Promise<AxiosResponse> {
    return this.client.delete<AxiosResponse>(`/boxes/${id}`);
  }
}

export default new BoxService(axiosInstance);
