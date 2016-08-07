class Category < ActiveRecord::Base
  has_many :items

  def get_amount_total(user_id)
    binding.pry
    @items = Item.where("category_id = ? AND user_id = ?", self.id.to_s, user_id.to_s)
    binding.pry
  end
end
