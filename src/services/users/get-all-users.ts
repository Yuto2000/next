import type { ApiContext, User } from 'types'
import { fetcher } from 'utils'

/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */
const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  const res = await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': '*',
    },
  })

  return res
}

export default getAllUsers
