const accounts = [
  {
    accountId: 1,
    claims: async (use, scope) => {
      return { sub: 1 }
    }
  }
]

export async function findAccount (ctx, id) {
  return accounts.find(account => account.accountId === id)
}
