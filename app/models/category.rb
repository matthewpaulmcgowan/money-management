class Category < ActiveRecord::Base
  has_many :items

  def get_amount_total(user_id)
    @items = Item.where(category_id: self.id, user_id: user_id)
    @items.inject(0) do |sum, item|
      sum + item.amount
    end
  end
end
