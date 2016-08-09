class DeleteUserIdAndAmountTotalColumnsFromCategories < ActiveRecord::Migration
  def change
    remove_column :categories, :user_id, :integer
    remove_column :categories, :amount_total, :integer
  end
end
