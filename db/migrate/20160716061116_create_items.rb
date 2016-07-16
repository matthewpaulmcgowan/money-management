class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.text :name
      t.integer :amount
      t.text :category
      t.integer :user_id
      
      t.timestamps null: false
    end
  end
end
