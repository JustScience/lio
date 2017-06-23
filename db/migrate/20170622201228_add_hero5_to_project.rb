class AddHero5ToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :hero_5, :string
  end
end
