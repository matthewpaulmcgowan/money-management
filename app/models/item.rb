class Item < ActiveRecord::Base
  belongs_to :user
  belongs_to :category

  def category_name=(category_name)
    @category_name = category_name
    self.standardize_category_name
    @category = Category.find_or_create_by(name: @category_name)
    self.category = @category
  end

  def standardize_category_name
    @category_name = @category_name.singularize.downcase.strip.gsub(/\s+/, ' ').humanize
  end

end
