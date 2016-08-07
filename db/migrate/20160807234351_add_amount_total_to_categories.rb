class AddAmountTotalToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :amount_total, :integer
  end
end
