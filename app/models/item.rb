class Item < ActiveRecord::Base
  belongs_to :user
  belongs_to :category

  def category_name=(category_name)
    binding.pry
  end
end
