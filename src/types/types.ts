
export type NonZeroPositiveNumber<T extends number> = `${T}` extends `-${string}` | '0' ? never : T;

export type UserSessionType  = {
    user_id: number,
    role_id?: number,
    company_id?: number,
    company_branch_id?: number
  }


export  type productParams =  {
    name: String,
    type_id: Number,
    price: Number,
    description: String,
    category_ids: Number,
    attributes: String,
    parent_id: Number,
    children: Array<Number>,
    weight: Number,
    length: Number,
    height: Number,
    width: Number,
    created_by: Number,
    created_at: Number,
}
