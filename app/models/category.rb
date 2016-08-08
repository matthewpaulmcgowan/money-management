class Category < ActiveRecord::Base
  has_many :items

  def get_amount_total
    @items = Item.where(category_id: self.id, user_id: self.user_id)
  end

  def self.find_or_create_by_name(category_name)
    #@category = Category..where(:state => "Wisconsin", :single => true)
    #if @category === null
    #  @category = Category.create
  end
end
