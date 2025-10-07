import { LoginInputs } from "@/features/auth/lib/schemas"
import { BaseResponse } from "@/common/types"
import { instance } from "@/common/instance"

export const authApi = {
  login(payload: LoginInputs) {
    return instance.post<BaseResponse<{userId: number; token: string}>>('auth/login', payload);
  }
}