Garage.configure {}

Garage::TokenScope.configure do
  register :public, desc: "accessing publicly available data" do
    access :read, Todo
  end
end

Garage.configuration.strategy = Garage::Strategy::NoAuthentication
