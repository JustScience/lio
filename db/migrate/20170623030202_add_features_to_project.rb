class AddFeaturesToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :feature_1, :string
    add_column :projects, :feature_2, :string
    add_column :projects, :feature_3, :string
    add_column :projects, :feature_4, :string
  end
end
