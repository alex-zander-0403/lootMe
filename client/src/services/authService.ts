import { AxiosInstance, AxiosResponse } from 'axios';
import { UserLoginType, UserSignUpType, UserState } from '../types/userTypes';
import axiosInstance from './axiosInstance';

class authService {
  constructor(private readonly client: AxiosInstance) {}

  // регистрация
  async authSignUp(userData: UserSignUpType): Promise<UserState> {
    const { data } = await this.client.post<UserState>('/auth/signup', userData);
    return data;
  }

  // login
  async authLogin(userData: UserLoginType): Promise<UserState> {
    const { data } = await this.client.post<UserState>('auth/login', userData);
    return data;
  }

  // logout
  async authLogout(): Promise<AxiosResponse> {
    return this.client<AxiosResponse>('auth/logout');
  }

  // check user
  async checkUser(): Promise<UserState> {
    const { data } = await this.client<UserState>('/tokens/refresh');
    return data;
  }
}

export default new authService(axiosInstance);
