class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
           :omniauthable#, :confirmable
  include DeviseTokenAuth::Concerns::User
  has_many :items
  has_many :categories, through: :items

  def calculate_Category_totals
    amount_total = {}
    self.categories.uniq.each do |category|
      total = category.get_amount_total(self.id)
      amount_total[category.name] = total
    end
    amount_total 
  end
end
