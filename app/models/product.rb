class Product < ApplicationRecord
  enum condition: [:used, :open, :new]
  enum selling_option: [:swap, :bid]
  enum shipping_option: [:shipping, :pickup]
end
