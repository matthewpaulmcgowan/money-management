class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :category
end
